import { SupportedPayloadTypes } from '@discoursegroup/commons-js';

/**
 * The medium of the message.
 * Message is delivered via the pipe and can be either outgoing, live or history.
 * @enum {number}
 */
export enum RRMessageMedium {
  outgoing,
  live,
  history,
}

/**
 * The payload wrapper for the message.
 */
export class RRPayload {
  constructor(
    private readonly _payload: SupportedPayloadTypes,
    private _eventTime: number = Date.now(),
    private _medium: RRMessageMedium = RRMessageMedium.outgoing,
    private _channel: string = 'default'
  ) {}

  /**
   * The time the message was sent.
   * @return {number} - Epoch Time.
   */
  get eventTime(): number {
    return this._eventTime;
  }

  set eventTime(value: number) {
    this._eventTime = value;
  }

  /**
   * The medium of the message.
   * @return {RRMessageMedium} - The medium of the message.
   * @see RRMessageMedium
   */
  get medium(): RRMessageMedium {
    return this._medium;
  }

  set medium(value: RRMessageMedium) {
    this._medium = value;
  }

  /**
   * The tag of the message.
   */
  get channel(): string {
    return this._channel;
  }

  set channel(value: string) {
    this._channel = value;
  }

  /**
   * The payload of the message.
   */
  get payload(): SupportedPayloadTypes {
    return this._payload;
  }
}
