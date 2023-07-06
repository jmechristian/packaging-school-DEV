import clsx from 'clsx';

export function SectionHeading({ number, children, className, ...props }) {
  return (
    <h2
      className={clsx(
        className,
        'inline-flex items-center rounded-full w-fit px-4 py-1 text-brand-base ring-1 ring-inset ring-base-brand'
      )}
      {...props}
    >
      <span className='font-mono text-sm text-clemson' aria-hidden='true'>
        {number.padStart(2, '0')}
      </span>
      <span className='ml-3 h-3.5 w-px bg-blue-600/20 dark:bg-base-brand' />
      <span className='ml-3 text-base font-medium tracking-tight text-base-brand'>
        {children}
      </span>
    </h2>
  );
}
