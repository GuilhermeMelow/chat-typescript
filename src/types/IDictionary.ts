export default interface IDictionary<Key, Value> {
    [Key: number]: { Key: Key, Value: Value };
}