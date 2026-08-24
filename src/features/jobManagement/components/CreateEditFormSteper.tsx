type Props = {
  formPart: number;
};

export default function CreateEditFormSteper({ formPart }: Props) {
  return (
    <div className="flex w-[85%] mx-auto">
      <div className="flex flex-1">
        <div className="flex flex-col items-center gap-6">
          <p className="w-13 h-13 flex items-center justify-center rounded-full text-[15px] bg-primary-900 text-white">
            1
          </p>
          <p className="text-[15px] text-primary-900">Job Information</p>
        </div>

        <div className="flex flex-1 justify-center self-center gap-3">
          <span className="size-3 rounded-full bg-primary-900" />
          <span className="size-3 rounded-full bg-primary-900" />
          <span className="size-3 rounded-full bg-primary-900" />
          <span className="size-3 rounded-full bg-primary-900" />
          <span className="size-3 rounded-full bg-primary-900" />
        </div>
      </div>

      <div className="flex flex-1">
        <div className="flex flex-col items-center gap-6">
          <p
            className={`w-13 h-13 flex items-center justify-center rounded-full text-[15px] ${formPart >= 2 ? 'bg-primary-900 text-white' : 'bg-gray-200 text-gray-400'} `}
          >
            2
          </p>
          <p
            className={`text-[15px] ${formPart >= 2 ? 'text-primary-900' : 'text-gray-400'}`}
          >
            Job Schedule
          </p>
        </div>

        <div className="flex flex-1 justify-center self-center gap-3">
          <span
            className={`size-3 rounded-full ${formPart >= 3 ? 'bg-primary-900' : 'bg-gray-200'}`}
          />
          <span
            className={`size-3 rounded-full ${formPart >= 3 ? 'bg-primary-900' : 'bg-gray-200'}`}
          />
          <span
            className={`size-3 rounded-full ${formPart >= 3 ? 'bg-primary-900' : 'bg-gray-200'}`}
          />
          <span
            className={`size-3 rounded-full ${formPart >= 3 ? 'bg-primary-900' : 'bg-gray-200'}`}
          />
          <span
            className={`size-3 rounded-full ${formPart >= 3 ? 'bg-primary-900' : 'bg-gray-200'}`}
          />
        </div>
      </div>

      <div className="flex flex-1">
        <div className="flex flex-col items-center gap-6">
          <p
            className={`w-13 h-13 flex items-center justify-center rounded-full text-[15px] ${formPart >= 3 ? 'bg-primary-900 text-white' : 'bg-gray-200 text-gray-400'} `}
          >
            3
          </p>
          <p
            className={`text-[15px] text-center ${formPart >= 3 ? 'text-primary-900' : 'text-gray-400'}`}
          >
            Performance Metrics <br />( Optional )
          </p>
        </div>

        <div className="flex flex-1 justify-center self-center gap-3">
          <span
            className={`size-3 rounded-full ${formPart > 3 ? 'bg-primary-900' : 'bg-gray-200'}`}
          />
          <span
            className={`size-3 rounded-full ${formPart > 3 ? 'bg-primary-900' : 'bg-gray-200'}`}
          />
          <span
            className={`size-3 rounded-full ${formPart > 3 ? 'bg-primary-900' : 'bg-gray-200'}`}
          />
          <span
            className={`size-3 rounded-full ${formPart > 3 ? 'bg-primary-900' : 'bg-gray-200'}`}
          />
          <span
            className={`size-3 rounded-full ${formPart > 3 ? 'bg-primary-900' : 'bg-gray-200'}`}
          />
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center gap-6">
          <p
            className={`w-13 h-13 flex items-center justify-center rounded-full text-[15px] ${formPart > 3 ? 'bg-primary-900 text-white' : 'bg-gray-200 text-gray-400'} `}
          >
            4
          </p>
          <p
            className={`text-[15px] ${formPart > 3 ? 'text-primary-900' : 'text-gray-400'}`}
          >
            Fixed Tasks ( Optional )
          </p>
        </div>
      </div>
    </div>
  );
}
