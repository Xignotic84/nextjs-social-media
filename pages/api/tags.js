import faker from '@faker-js/faker'

export default function handler(req, res) {

  const postsArray = []

  for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
    postsArray.push({
      header: faker.company.catchPhraseNoun(),
      text: faker.company.bsNoun()
    })
  }

  res.status(200).json({ tags: postsArray })
}
