export const promise = (feature: () => Promise<any>, arglist: any[][]): any => {
  if (arglist == []) {
    return new Promise(async (res, rej) => {
      try {
        const out = await feature()
        res(out)
      } catch (err) {
        rej(err)
      }
    })
  } else {
    return Promise.all(
      arglist.map((arg: any[]): Promise<any> => {
        return new Promise(async (res, rej) => {
          try {
            const out = await feature.call(arg)
            res(out)
          } catch (err) {
            rej(err)
          }
        })
      })
    )
  }
}

export const normal = (feature: () => Promise<any>, arglist: any[][]): any => {
  if (arglist == []) {
    return new Promise(async (res, rej) => {
      try {
        const out = feature()
        res(out)
      } catch (err) {
        rej(err)
      }
    })
  } else {
    return Promise.all(
      arglist.map((arg: any[]): Promise<any> => {
        return new Promise(async (res, rej) => {
          try {
            const out = feature.call(arg)
            res(out)
          } catch (err) {
            rej(err)
          }
        })
      })
    )
  }
}
