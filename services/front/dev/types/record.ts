export enum RecordType {
  Run,
  Machine,
  Stretch,
  Weight,
}

export enum RunType {
  Run,
  Bike,
}

export interface Run {
  readonly type: RunType
  readonly distance: number
}

export interface MachineType {
  readonly id: number
  readonly name: string
  readonly type: string
  readonly partsName: string
}

export interface Machine {
  readonly id: number
}

export interface Stretch {
  readonly name: string
}

export interface Weight {
  readonly name: string
  readonly weight: number
  readonly count: number
  readonly set: number
}

export default interface Record {
  readonly type: RecordType
  readonly createdAt: Date
  readonly updatedAt: Date
  readonly data: Run | Machine | Stretch | Weight
}
