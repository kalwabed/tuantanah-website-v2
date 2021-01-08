export async function getAllProperty() {
  try {
    return await (await fetch(`${process.env.ENDPOINT}/v2/v`)).json()
  } catch (err) {
    console.error(err)
  }
}
