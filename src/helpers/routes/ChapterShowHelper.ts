import { FastifyRedis } from '@fastify/redis'

import { ApiQueryString } from '#config/types'
import GenericShowHelper from '#helpers/routes/GenericShowHelper'

export default class ChapterShowHelper extends GenericShowHelper {
	constructor(asin: string, options: ApiQueryString, redis: FastifyRedis | null) {
		super(asin, options, redis, 'chapter')
	}
}
