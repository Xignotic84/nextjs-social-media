import faker from '@faker-js/faker'

export default function handler(req, res) {

  const avatarURL = faker.image.avatar()

  const username = faker.name.firstName()

  const followers = faker.datatype.number()

  const jobTitle = faker.name.jobTitle()

  res.status(200).json({ username, avatarURL, followers, jobTitle })
}
