1. DIFFERENCE B/W HTTP1 AND HTTP2

Binary vs. Textual:
HTTP/1.1: Uses a textual format for requests and responses.
HTTP/2: Employs a binary format, which is more efficient for parsing and transmission.

Multiplexing:
HTTP/1.1: Processes requests sequentially, leading to potential delays.
HTTP/2: Fully multiplexed, allowing multiple requests and responses to be sent concurrently over a single connection.

Parallelism:
HTTP/1.1: Requires multiple TCP connections for parallelism.
HTTP/2: Can use a single connection for parallel requests, reducing latency.

Header Compression:
HTTP/1.1: Headers are verbose and add overhead.
HTTP/2: Utilizes header compression to minimize overhead.

Server Push:
HTTP/1.1: Doesn’t support proactive resource pushing.
HTTP/2: Allows servers to push resources (e.g., stylesheets, images) to the client cache proactively.

2. THE INTERNAL REESENTATION OF OBJECT

Properties and Key-Value Pairs:
Each JavaScript object is internally represented as a collection of properties. These properties consist of a key (or name) and a corresponding value.
Properties can be either data properties (containing a value) or accessor properties (containing a getter or setter function)1.

Prototype Chain:
Objects in JavaScript have an internal property called [[Prototype]] (also known as __proto__ in some contexts). This property refers to another object, creating a chain of prototypes.

The prototype chain allows objects to inherit properties and methods from their prototypes2.
Hash Table Representation:
Internally, JavaScript engines represent objects using various data structures. One common representation is the hash table, where keys are hashed to optimize property access.
The hash table enables quick lookup of properties, making object access efficient.