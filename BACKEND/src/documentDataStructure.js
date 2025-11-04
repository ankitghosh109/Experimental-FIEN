const user = {
  _id: "random_id",
  email: "ankit@gmail.com",
  global_name: "ankit",
  username: "ankit_34",
  password: "ankit123",
  date_of_birth: {
    month: "February",
    day: 4,
    year: 2021,
  },
  created_at: "2023-01-01T12:00:00Z",
}

const relationships = {
  user_id: "random_id",
  related_user_id: "random_id",
  type: 1,
}

const private_channel = {
  _id: "dm_id",
  type: 1,
  recipients: ["my_id", "friend_id"],
  last_message_id: "msg_999",
}

const message = {
  _id: "random_id", // unique Snowflake ID
  channel_id: "random_id", // the channel / DM this message belongs to
  author_id: "random_id", // who sent the message
  content: "Hello world!", // text content
  timestamp: "2025-10-14T12:30:00Z",
  attachments: [
    {
      id: "random_id",
      filename: "video.mp4",
      size: 1048576,
      url: "https://cdn.discordapp.com/attachments/...",
      content_type: "video/mp4",
    },
  ],
  embeds: [],
  mentions: ["random_id"],
  reactions: [{ emoji: "👍", user_ids: ["111", "222"] }],
}

const user_channel_reads = {
  user_id: "111",
  channel_id: "123456",
  last_read_message_id: "789012",
  last_read_timestamp: "2025-10-14T12:35:00Z",
}
