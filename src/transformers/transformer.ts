import { RRPayload } from '../models/rr-payload';

/**
 * A transformer implementation can encode and decode messages.
 * Transformers should be able to encode and decode messages in both directions.
 * One way encoding and decoding is not supported.
 */
export interface Transformer {
  /**
   * Returns the identifier of the transformer.
   * The identifier is used to identify the transformer in the transformation chain.
   * @returns {string} the identifier of the transformer.
   */
  getIdentifier(): string;

  /**
   * Returns the version of the transformer.
   * The version is used to identify the specific transformer variant in the transformation chain.
   * @returns {number} the version of the transformer.
   */
  getVersion(): number;

  /**
   * Initializes the transformer.
   * This method is called once before the transformer is used.
   * @returns {Promise<void>} a promise that resolves when the transformer is initialized.
   */
  initialize(): Promise<void>;

  /**
   * Decodes the message.
   * @param {RRPayload} message
   * @returns {Promise<RRPayload>} a promise that resolves with the decoded message.
   */
  decode(message: RRPayload): Promise<RRPayload>;

  /**
   * Encodes the message.
   * @param {RRPayload} message
   * @returns {Promise<RRPayload>} a promise that resolves with the encoded message.
   */
  encode(message: RRPayload): Promise<RRPayload>;
}
