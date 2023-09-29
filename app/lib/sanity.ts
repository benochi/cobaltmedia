import { createClient } from "next-sanity"

const projectId = 'tu3ldxbr'
const dataset = 'production' //from init of sanity project.
const apiVersion = '2023-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})