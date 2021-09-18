import ApiHelper from '../../src/helpers/audibleApi'
import { AudibleInterface } from '../../src/interfaces/audible'
import { ApiBookInterface } from '../../src/interfaces/books'

let asinBad: string
let apiBad: ApiHelper

let asinGood: string
let apiGood: ApiHelper

// Run through known book data to test responses
describe('When fetching Project Hail Mary from Audible API', () => {
    let response: AudibleInterface
    beforeAll((done) => {
        asinGood = 'B08G9PRS1K'
        apiGood = new ApiHelper(asinGood)
        apiGood.fetchBook().then(result => {
            response = result!
            done()
        })
    })

    it('returned built url', () => {
        expect(apiGood.buildUrl(asinGood)).toBe(`https://api.audible.com/1.0/catalog/products/${asinGood}?response_groups=contributors,product_desc,product_extended_attrs,product_attrs,media`)
    })

    it('returned asin', () => {
        expect(response.product.asin).toBe(asinGood)
    })

    it('returned 1 author', () => {
        expect(response.product.authors!.length).toBe(1)
    })

    it('returned author #1', () => {
        expect(response.product.authors![0].asin).toBe('B00G0WYW92')
        expect(response.product.authors![0].name).toBe('Andy Weir')
    })

    it('returned description', () => {
        expect(response.product.merchandising_summary).toBe('<p>Ryland Grace is the sole survivor on a desperate, last-chance mission - and if he fails, humanity and the Earth itself will perish. Except that right now, he doesn\'t know that. He can\'t even remember his own name, let alone the nature of his assignment or how to complete it....</p>')
    })

    it('returned format_type', () => {
        expect(response.product.format_type).toBe('unabridged')
    })

    it('returned language', () => {
        expect(response.product.language).toBe('english')
    })

    it('returned 1 narrators', () => {
        expect(response.product.narrators!.length).toBe(1)
    })

    it('returned narrator #1', () => {
        expect(response.product.narrators![0].name).toBe('Ray Porter')
    })

    it('returned product_images', () => {
        expect(response.product.product_images['500']).toBe('https://m.media-amazon.com/images/I/51b6fvQr1-L._SL500_.jpg')
    })

    it('returned publisher_name', () => {
        expect(response.product.publisher_name).toBe('Audible Studios')
    })

    it('returned publisher_summary', () => {
        expect(response.product.publisher_summary).toBe('<p><b>Number-One Audible and</b><b><i> New York Times</i></b><b> Audio Best Seller</b></p> <p><b>A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the number-one </b><b><i>New York Times</i></b><b> best-selling author of </b><b><i>The Martian</i></b><b>.</b></p> <p>Ryland Grace is the sole survivor on a desperate, last-chance mission - and if he fails, humanity and the Earth itself will perish.</p> <p>Except that right now, he doesn\'t know that. He can\'t even remember his own name, let alone the nature of his assignment or how to complete it.</p> <p>All he knows is that he\'s been asleep for a very, very long time. And he\'s just been awakened to find himself millions of miles from home, with nothing but two corpses for company.</p> <p>His crewmates dead, his memories fuzzily returning, he realizes that an impossible task now confronts him. Alone on this tiny ship that\'s been cobbled together by every government and space agency on the planet and hurled into the depths of space, it\'s up to him to conquer an extinction-level threat to our species.</p> <p>And thanks to an unexpected ally, he just might have a chance.</p> <p>Part scientific mystery, part dazzling interstellar journey, <i>Project Hail Mary</i> is a tale of discovery, speculation, and survival to rival <i>The Martian</i> - while taking us to places it never dreamed of going.</p> <p>PLEASE NOTE: To accommodate this audio edition, some changes to the original text have been made with the approval of author Andy Weir.</p>')
    })

    it('returned release_date', () => {
        expect(response.product.release_date).toBe('2021-05-04')
    })

    it('returned runtime length in minutes', () => {
        expect(response.product.runtime_length_min).toBe(970)
    })

    it('returned title', () => {
        expect(response.product.title).toBe('Project Hail Mary')
    })
})

describe('When fetching The Coldest Case from Audible API', () => {
    let response: AudibleInterface
    beforeAll((done) => {
        asinGood = 'B08C6YJ1LS'
        apiGood = new ApiHelper(asinGood)
        apiGood.fetchBook().then(result => {
            response = result!
            done()
        })
    })

    it('returned built url', () => {
        expect(apiGood.buildUrl(asinGood)).toBe(`https://api.audible.com/1.0/catalog/products/${asinGood}?response_groups=contributors,product_desc,product_extended_attrs,product_attrs,media`)
    })

    it('returned asin', () => {
        expect(response.product.asin).toBe(asinGood)
    })

    it('returned 3 authors', () => {
        expect(response.product.authors!.length).toBe(3)
    })

    it('returned author #1', () => {
        expect(response.product.authors![0].asin).toBe('B000APZGGS')
        expect(response.product.authors![0].name).toBe('James Patterson')
    })

    it('returned author #2', () => {
        expect(response.product.authors![1].name).toBe('Aaron Tracy')
    })

    it('returned author #3', () => {
        expect(response.product.authors![2].asin).toBe('B07R2F2DXH')
        expect(response.product.authors![2].name).toBe('Ryan Silbert')
    })

    it('returned description', () => {
        expect(response.product.merchandising_summary).toBe('<p>James Patterson\'s Detective Billy Harney is back, this time investigating murders in a notorious Chicago drug ring, which will lead him, his sister, and his new partner through a dangerous web of corrupt politicians, vengeful billionaires, and violent dark web conspiracies....   </p>')
    })

    it('returned format_type', () => {
        expect(response.product.format_type).toBe('original_recording')
    })

    it('returned language', () => {
        expect(response.product.language).toBe('english')
    })

    it('returned 5 narrators', () => {
        expect(response.product.narrators!.length).toBe(5)
    })

    it('returned narrator #1', () => {
        expect(response.product.narrators![0].name).toBe('Aaron Paul')
    })

    it('returned narrator #2', () => {
        expect(response.product.narrators![1].name).toBe('Krysten Ritter')
    })

    it('returned narrator #3', () => {
        expect(response.product.narrators![2].name).toBe('Nathalie Emmanuel')
    })

    it('returned narrator #4', () => {
        expect(response.product.narrators![3].name).toBe('Beau Bridges')
    })

    it('returned narrator #5', () => {
        expect(response.product.narrators![4].name).toBe('full cast')
    })

    it('returned cover image', () => {
        expect(response.product.product_images['500']).toBe('https://m.media-amazon.com/images/I/51SteOEMD8L._SL500_.jpg')
    })

    it('returned series name', () => {
        expect(response.product.publication_name).toBe('A Billy Harney Thriller')
    })

    it('returned publisher', () => {
        expect(response.product.publisher_name).toBe('Audible Originals')
    })

    it('returned publisher_summary', () => {
        expect(response.product.publisher_summary).toBe('<p><b>Please note</b>: This audio drama is for mature audiences only. It contains strong language, violence, and sexual content. Discretion is advised. </p> <p><b>James Patterson\'s Detective Billy Harney is back, this time investigating murders in a notorious Chicago drug ring, which will lead him, his sister, and his new partner through a dangerous web of corrupt politicians, vengeful billionaires, and violent dark web conspiracies. </b></p> <p>In <i>The Coldest Case: A Black Book Audio Drama</i>, homicide detective Billy Harney sends his new partner, Kate, deep undercover in a notorious Chicago drug ring. When several members of the ring soon turn up dead, Billy abruptly pulls Kate out, blowing her cover. Kate’s informant inside the gang quickly disappears. As does the ring’s black book.... </p> <p>When Billy can’t find the informant, he wonders if Kate is secretly harboring her, since the two grew close during Kate\'s weeks undercover. As Billy and Kate investigate the ring’s murders, they’ll be pulled into a dangerous web of corrupt politicians, vengeful billionaires, drugged pro-athletes, and violent, dark web conspiracies, all in search of the missing black book. </p>')
    })

    it('returned release_date', () => {
        expect(response.product.release_date).toBe('2021-03-11')
    })

    it('returned runtime length in minutes', () => {
        expect(response.product.runtime_length_min).toBe(232)
    })

    it('returned title', () => {
        expect(response.product.title).toBe('The Coldest Case: A Black Book Audio Drama')
    })
})

describe('When parsing The Coldest Case', () => {
    let response: ApiBookInterface
    beforeAll((done) => {
        asinGood = 'B08C6YJ1LS'
        apiGood = new ApiHelper(asinGood)
        apiGood.fetchBook().then(result => {
            apiGood.parseResponse(result).then(result => {
                response = result
                done()
            })
        })
    })

    it('returned asin', () => {
        expect(response.asin).toBe(asinGood)
    })

    it('returned 3 authors', () => {
        expect(response.authors!.length).toBe(3)
    })

    it('returned author #1', () => {
        expect(response.authors![0].asin).toBe('B000APZGGS')
        expect(response.authors![0].name).toBe('James Patterson')
    })

    it('returned author #2', () => {
        expect(response.authors![1].name).toBe('Aaron Tracy')
    })

    it('returned author #3', () => {
        expect(response.authors![2].asin).toBe('B07R2F2DXH')
        expect(response.authors![2].name).toBe('Ryan Silbert')
    })

    it('returned description', () => {
        expect(response.description).toBe('James Patterson\'s Detective Billy Harney is back, this time investigating murders in a notorious Chicago drug ring, which will lead him, his sister, and his new partner through a dangerous web of corrupt politicians, vengeful billionaires, and violent dark web conspiracies....   ')
    })

    it('returned format_type', () => {
        expect(response.formatType).toBe('original_recording')
    })

    it('returned language', () => {
        expect(response.language).toBe('english')
    })

    it('returned 5 narrators', () => {
        expect(response.narrators!.length).toBe(5)
    })

    it('returned narrator #1', () => {
        expect(response.narrators![0].name).toBe('Aaron Paul')
    })

    it('returned narrator #2', () => {
        expect(response.narrators![1].name).toBe('Krysten Ritter')
    })

    it('returned narrator #3', () => {
        expect(response.narrators![2].name).toBe('Nathalie Emmanuel')
    })

    it('returned narrator #4', () => {
        expect(response.narrators![3].name).toBe('Beau Bridges')
    })

    it('returned narrator #5', () => {
        expect(response.narrators![4].name).toBe('full cast')
    })

    it('returned cover image', () => {
        expect(response.image).toBe('https://m.media-amazon.com/images/I/51SteOEMD8L.jpg')
    })

    it('returned series name', () => {
        expect(response.publicationName).toBe('A Billy Harney Thriller')
    })

    it('returned publisher', () => {
        expect(response.publisherName).toBe('Audible Originals')
    })

    it('returned publisher_summary', () => {
        expect(response.summary).toBe('<p><b>Please note</b>: This audio drama is for mature audiences only. It contains strong language, violence, and sexual content. Discretion is advised. </p> <p><b>James Patterson\'s Detective Billy Harney is back, this time investigating murders in a notorious Chicago drug ring, which will lead him, his sister, and his new partner through a dangerous web of corrupt politicians, vengeful billionaires, and violent dark web conspiracies. </b></p> <p>In <i>The Coldest Case: A Black Book Audio Drama</i>, homicide detective Billy Harney sends his new partner, Kate, deep undercover in a notorious Chicago drug ring. When several members of the ring soon turn up dead, Billy abruptly pulls Kate out, blowing her cover. Kate’s informant inside the gang quickly disappears. As does the ring’s black book.... </p> <p>When Billy can’t find the informant, he wonders if Kate is secretly harboring her, since the two grew close during Kate\'s weeks undercover. As Billy and Kate investigate the ring’s murders, they’ll be pulled into a dangerous web of corrupt politicians, vengeful billionaires, drugged pro-athletes, and violent, dark web conspiracies, all in search of the missing black book. </p>')
    })

    it('returned release_date', () => {
        expect(new Date(response.releaseDate).toISOString()).toBe(new Date('2021-03-11T00:00:00.000Z').toISOString())
    })

    it('returned runtime length in minutes', () => {
        expect(response.runtimeLengthMin).toBe(232)
    })

    it('returned title', () => {
        expect(response.title).toBe('The Coldest Case: A Black Book Audio Drama')
    })
})

// Test parse is also undefined
describe('When fetching a fake ASIN from Audible API', () => {
    let response: AudibleInterface
    beforeAll((done) => {
        asinBad = '1234567891'
        apiBad = new ApiHelper(asinBad)
        apiBad.fetchBook().then(result => {
            response = result!
            done()
        })
    })

    it('returned undefined title', () => {
        expect(response.product.title).toBeUndefined()
    })

    it('threw no authors key error', async () => {
        await expect(apiBad.parseResponse(response))
        .rejects
        .toThrowError('Required key: authors, does not exist on: 1234567891')
    })

    it('threw error when parsing undefined', async () => {
        await expect(apiBad.parseResponse(undefined))
        .rejects
        .toThrowError('No API response to parse')
    })
})

describe('When parsing a book with no title from Audible API', () => {
    let response: AudibleInterface
    beforeAll((done) => {
        asinBad = 'B07BS4RKGH'
        apiBad = new ApiHelper(asinBad)
        apiBad.fetchBook().then(result => {
            response = result!
            done()
        })
    })

    it('threw an error', async () => {
        await expect(apiBad.parseResponse(response))
        .rejects
        .toThrowError('Required key: title, does not exist on: B07BS4RKGH')
    })
})
