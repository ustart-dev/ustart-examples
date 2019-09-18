const helloQuery = `
query {
  hello
}
`;

let client = null;

beforeAll(async () => {
  client = TestingUtils.getGraphQLClient();
});

describe("Example of test", () => {
  test("hello query", async () => {
    await expect(
      client.request(helloQuery)
    ).resolves.toMatchObject({
      "hello": "Hello there, everything is right. You can keep reading the docs!"
    });
  });
});
