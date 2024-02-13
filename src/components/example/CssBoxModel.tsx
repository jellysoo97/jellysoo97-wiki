const Example1 = () => {
  return (
    <div className="example flex justify-center gap-x-8">
      <p className="w-[50px] m-0 text-lg border-2 border-yellow-500">
        extrinsic sizing width: 50px
      </p>
      <p className="m-0 text-lg border-2 border-yellow-500">
        intrinsic sizing width: unset
      </p>
      <p className="w-min m-0 text-lg border-2 border-yellow-500">
        intrinsic sizing width: min-content
      </p>
    </div>
  )
}

const Example2 = () => {
  return (
    <div className="example flex justify-center gap-x-8">
      <div className="flex flex-col items-center gap-y-2">
        <div className="box-content w-[200px] text-neutral-600 border-[10px] p-5 bg-yellow-500 border-emerald-600">
          content box width: 200px
        </div>
        <p>
          box-sizing:content-box;
          <br />
          box width: 260px
        </p>
      </div>

      <div className="flex flex-col items-center gap-y-2">
        <div className="box-border w-[200px] text-neutral-600 border-[10px] p-5 bg-yellow-500 border-emerald-600">
          content box width: 140px
        </div>
        <p>
          box-sizing:border-box;
          <br />
          box width: 200px
        </p>
      </div>
    </div>
  )
}

const Example = {
  Example1,
  Example2,
}

export default Example
