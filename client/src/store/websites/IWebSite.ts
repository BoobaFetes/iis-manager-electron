export interface IWebSite {
  id: string;
  name: string;
  status: WebSiteStatus;
}

export enum WebSiteStatus {
  /** The Site, ApplicationPool, or WorkerProcess object has started. */
  Started = 1,
  /** The object is in the process of starting. */
  Starting = 0,
  /** The object has stopped. */
  Stopped = 3,
  /** The object is in the process of stopping. */
  Stopping = 2,
  /** The object has a unexpected status, may be refresh the status or ???. */
  Unknown = 4,
}
