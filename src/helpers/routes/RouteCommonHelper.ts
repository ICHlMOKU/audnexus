import { FastifyReply } from 'fastify'
import { ZodError } from 'zod'

import { ApiQueryString, ApiQueryStringSchema, AsinSchema } from '#config/types'
import {
	ErrorMessageBadQuery,
	MessageBadAsin,
	MessageBadRegion,
	MessageNoSearchParams
} from '#static/messages'

class RouteCommonHelper {
	asin: string
	query: unknown
	parsedQuery!: ApiQueryString
	reply: FastifyReply
	constructor(asin: string, query: unknown, reply: FastifyReply) {
		this.asin = asin
		this.query = query
		this.reply = reply
	}

	/**
	 * Run validations
	 * Reply object may be modified by validations
	 * @returns {object} - Returns object with reply and options
	 */
	handler(): { options: ApiQueryString; reply: FastifyReply } {
		// Run validations
		this.runValidations()
		return {
			options: this.parsedQuery,
			reply: this.reply
		}
	}

	/**
	 * Handle parse error and throw appropriate error
	 * @param {object} error - ZodError object
	 * @throws {Error} - Throws error if query is Invalid
	 * @returns {void}
	 */
	handleParseError(error: ZodError): void {
		const value = error.issues[0].path[0] as string
		switch (value) {
			case 'name':
				return this.throwBadNameError()
			case 'region':
				return this.throwBadRegionError()
			default:
				return this.throwBadQueryError(value)
		}
	}

	/**
	 * Checks asin length and format to verify it's valid
	 * @param {string} asin 10 character identifier
	 * @returns {boolean}
	 */
	isValidAsin(asin: string): boolean {
		return AsinSchema.safeParse(asin).success
	}

	/**
	 * Parse query or throw error
	 * Sets this.parsedQuery to parsed query on success
	 * @param {object} query - Query object
	 * @throws {Error} - Throws error if query is Invalid
	 */
	parseQueryString(): void {
		const parsedQuery = ApiQueryStringSchema.safeParse(this.query)
		if (!parsedQuery.success) {
			this.handleParseError(parsedQuery.error)
		} else {
			this.parsedQuery = parsedQuery.data
		}
	}

	runValidations(): void {
		// Validate asin
		if (this.asin && !this.isValidAsin(this.asin)) this.throwBadAsinError()
		// Validate query
		this.parseQueryString()
	}

	/**
	 * Throw error if asin is invalid
	 * Sets reply code to 400
	 */
	throwBadAsinError(): void {
		this.reply.code(400)
		throw new Error(MessageBadAsin)
	}

	/**
	 * Throw error if name is invalid
	 * Sets reply code to 400
	 */
	throwBadNameError(): void {
		this.reply.code(400)
		throw new Error(MessageNoSearchParams)
	}

	/**
	 * Throw error if region is invalid
	 * Sets reply code to 400
	 */
	throwBadRegionError(): void {
		this.reply.code(400)
		throw new Error(MessageBadRegion)
	}

	/**
	 * Throw error if query is invalid
	 * Sets reply code to 400
	 */
	throwBadQueryError(message: string): void {
		this.reply.code(400)
		throw new Error(ErrorMessageBadQuery(message))
	}
}

export default RouteCommonHelper
