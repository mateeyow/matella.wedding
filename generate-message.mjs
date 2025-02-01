import fs from 'node:fs';
import readline from 'node:readline'

const inputFile = './list.txt';
const outputFile = './message.txt';

async function generateMessage() {
  const inputStream = fs.createReadStream(inputFile);
  const outputStream = fs.createWriteStream(outputFile);

  const rl = readline.createInterface({
    input: inputStream,
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    const msg = line.toString();

    const [name, link] = msg.split(', ');
    const transformedLine = `Hi ${name}, we're days away from #MattElla. Here's a few updates on our upcoming wedding. We can't wait to see you in Bali! ${link}`;
    outputStream.write(transformedLine + '\n');
  })

  rl.on('close', () => {
    console.log('Message generated');
    outputStream.end()
  })

  // const transformStream = new Transform({
  // 	// We'll override the _transform method to process lines
  // 	transform(chunk, encoding, callback) {
  // 		// Convert chunk (Buffer) to string and then process it
  // 		const line = chunk.toString();

  // 		// Perform your transformation (e.g., converting to uppercase)
  // 		const transformedLine = `HELLO! ${line.toUpperCase()}`;

  // 		// Push the transformed line as a Buffer back to the stream
  // 		this.push(transformedLine + '\n');

  // 		// Signal that the transformation is done
  // 		callback();
  // 	}
  // });

  // inputStream
  // 	.pipe(rl)
  // 	.pipe(transformStream)
  // 	.pipe(outputStream)
  // 	.on('finish', () => {
  // 		console.log('Message generated');
  // 	});
}

generateMessage();
