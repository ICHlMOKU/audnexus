import { types, schema } from 'papr'
import papr from '../papr'

const authorSchema = schema({
    aliases: types.array(
        types.string({ required: true })
    ),
    asin: types.string({ required: true }),
    birthDate: types.date(),
    books: types.array(
        types.objectId()
    ),
    description: types.string({ required: true }),
    formatType: types.string(),
    genres: types.array(
        types.object(
            {
                asin: types.string({ required: true }),
                name: types.string({ required: true }),
                type: types.string({ required: true })
            }
        )
    ),
    image: types.string(),
    links: types.array(
        types.object({
            link: types.string({ required: true }),
            type: types.string({ required: true })
        })
    ),
    location: types.string(),
    name: types.string({ required: true }),
    series: types.array(
        types.objectId()
    )
})

export type AuthorDocument = typeof authorSchema[0];
const Author = papr.model('authors', authorSchema)
export default Author