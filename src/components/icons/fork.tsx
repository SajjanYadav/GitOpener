import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

const ForkIcon = (props: Props) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fork</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 19.25C8.75 21.0449 10.2051 22.5 12 22.5C13.7949 22.5 15.25 21.0449 15.25 19.25C15.25 17.7132 14.1834 16.4255 12.75 16.087V12.5H15.25C17.3211 12.5 19 10.8211 19 8.75V7.91303C20.4333 7.57445 21.5 6.28679 21.5 4.75C21.5 2.95507 20.0449 1.5 18.25 1.5C16.4551 1.5 15 2.95507 15 4.75C15 6.28679 16.0666 7.57445 17.5 7.91303V8.75C17.5 9.99264 16.4926 11 15.25 11H8.75C7.50736 11 6.5 9.99264 6.5 8.75V7.91303C7.93335 7.57445 9 6.28679 9 4.75C9 2.95507 7.54493 1.5 5.75 1.5C3.95507 1.5 2.5 2.95507 2.5 4.75C2.5 6.28679 3.56665 7.57445 5 7.91303V8.75C5 10.8211 6.67893 12.5 8.75 12.5H11.25V16.087C9.81665 16.4255 8.75 17.7132 8.75 19.25ZM12 21C11.0335 21 10.25 20.2165 10.25 19.25C10.25 18.2835 11.0335 17.5 12 17.5C12.9665 17.5 13.75 18.2835 13.75 19.25C13.75 20.2165 12.9665 21 12 21ZM5.75 6.5C4.7835 6.5 4 5.7165 4 4.75C4 3.7835 4.7835 3 5.75 3C6.7165 3 7.5 3.7835 7.5 4.75C7.5 5.7165 6.7165 6.5 5.75 6.5ZM16.5 4.75C16.5 5.7165 17.2835 6.5 18.25 6.5C19.2165 6.5 20 5.7165 20 4.75C20 3.7835 19.2165 3 18.25 3C17.2835 3 16.5 3.7835 16.5 4.75Z"
      />
    </svg>
  );
};

export default ForkIcon;