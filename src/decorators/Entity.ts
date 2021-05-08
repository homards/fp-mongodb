export interface EntityOption {
  name?: string
}

export class EntityClass {
  protected _name!: string
}

export function Entity(name: string) {
  return function () {
    return class extends EntityClass {
      constructor(...args: any[]) {
        super()
        this._name = name
      }
    }
  }
}
