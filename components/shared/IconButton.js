import { CheckCircleIcon } from '@heroicons/react/20/solid';

export default function IconButton({
  text,
  icon,
  fn,
  bgColor,
  textColor,
  hoverColor,
}) {
  return (
    <>
      <button
        type='button'
        className={`inline-flex items-center gap-x-2 rounded-md ${bgColor} px-3.5 py-2.5 text-lg font-semibold ${textColor} shadow-sm hover:${hoverColor} transition-all ease-in`}
        onClick={() => fn()}
      >
        {text}
        {icon}
      </button>
    </>
  );
}
