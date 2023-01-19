const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  test("should return '0' when event is not passed", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });

  test("should return partitionKey when it is present in the event object", () => {
    const event = { partitionKey: "testKey" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("testKey");
  });

  test("should return sha3-512 hash of event when partitionKey is not present", () => {
    const event = { data: "testData" };
    const result = deterministicPartitionKey(event);
    expect(typeof result).toBe("string");
    expect(result.length).toBe(128);
  });

  test("should return sha3-512 hash of event when partitionKey is not a string", () => {
    const event = { partitionKey: { key: "testKey" } };
    const result = deterministicPartitionKey(event);
    expect(typeof result).toBe("string");
    expect(result.length).toBe(128);
  });

  test("should return sha3-512 hash of partitionKey when its length is greater than 256", () => {
    const event = { partitionKey: "a".repeat(300) };
    const result = deterministicPartitionKey(event);
    expect(typeof result).toBe("string");
    expect(result.length).toBe(128);
  });
});
