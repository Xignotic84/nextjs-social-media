import faker from '@faker-js/faker'

export default function handler(req, res) {

  const postsArray = []

  for (let i = 0; i < Math.floor(Math.random() * 60) + 1; i++) {
    postsArray.push({
      title: faker.word.adverb(),
      description: faker.random.words(20),
      thumbnailURL: `${faker.image.business()}?random=${Math.round(Math.random() * 1000)}`,
      username: faker.name.firstName(),
      avatarURL: faker.image.avatar()
    })
  }

  res.status(200).json({ posts: postsArray })
}
