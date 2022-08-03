import ScrapeHelper from '#helpers/books/audible/ScrapeHelper'
import { genresObject } from '#tests/datasets/helpers/books'

let asin: string
let helper: ScrapeHelper

beforeEach(() => {
	asin = 'B079LRSMNN'
	// Set up helpers
	helper = new ScrapeHelper(asin)
})

describe('ScrapeHelper should', () => {
	test('setup constructor correctly', () => {
		expect(helper.asin).toBe(asin)
		expect(helper.reqUrl).toBe(`https://www.audible.com/pd/${asin}/`)
	})

	test('fetch book', async () => {
		await expect(helper.fetchBook()).resolves.toBeDefined()
	})

	test.todo('log error message if no book found')

	test('return error if no book', async () => {
        asin = asin.slice(0, -1)
		helper = new ScrapeHelper(asin)

		await expect(helper.fetchBook()).resolves.toBeUndefined()
	})

	test('parse response', async () => {
		const book = await helper.fetchBook()
		await expect(helper.parseResponse(book)).resolves.toEqual(genresObject)
	})

	test('return undefined if no dom for parse response', async () => {
		await expect(helper.parseResponse(undefined)).resolves.toBeUndefined()
	})

	test.todo("return undefined if genres don't have asin")
})
