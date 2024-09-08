import Image from 'next/image';
import Link from 'next/link';

export const EthereumIcon: React.FC<JSX.IntrinsicElements['svg']> = ({ className, ...rest }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className={className}
      {...rest}
    >
      <title>Ethereum</title>
      <desc>Ethereum&apos;s logo.</desc>
      <path d="m11.997 1-.147.501v14.545l.147.147 6.752-3.99z" fill="currentColor" />
      <path
        d="M11.997 1 5.246 12.202l6.751 3.991v-7.06zm0 16.471-.083.102v5.18l.083.243 6.756-9.513z"
        fill="currentColor"
      />
      <path
        d="M11.997 22.996v-5.525l-6.751-3.988zm0-6.803 6.752-3.99-6.752-3.07zm-6.751-3.99 6.751 3.99v-7.06z"
        fill="currentColor"
      />
    </svg>
  );
};

export const AirbusIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://airbus.com" rel="noopener noreferrer" target="_blank">
      <Image
        src={require('@/components/common/logo-image/airbus-logo.png')}
        alt="Airbus"
        width={24}
        height={24}
      />
    </Link>
  );
};

export const BerkeleyIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://rdi.berkeley.edu/course/zkp/s23" rel="noopener noreferrer" target="_blank">
      <Image
        src={require('@/components/common/logo-image/berkeley-logo.png')}
        alt="Berkeley"
        width={24}
        height={24}
      />
    </Link>
  );
};

export const EthereumFoundationIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://ethereum.org/en/" rel="noopener noreferrer" target="_blank">
      <Image
        src={require('@/components/common/logo-image/ethereum-foundation-logo.png')}
        alt="Ethereum"
        width={24}
        height={24}
      />
    </Link>
  );
};

export const EthGlobalIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://ethglobal.com/" rel="noopener noreferrer" target="_blank">
      <Image
        src={require('@/components/common/logo-image/ethglobal-logo.png')}
        alt="EthGlobal"
        width={24}
        height={24}
      />
    </Link>
  );
};

export const IeeeIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://www.ieee.org/" rel="noopener noreferrer" target="_blank">
      <Image
        src={require('@/components/common/logo-image/ieee-logo.png')}
        alt="IEEE"
        width={24}
        height={24}
      />
    </Link>
  );
};

export const IsaeIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://www.isae-supaero.fr/en/" rel="noopener noreferrer" target="_blank">
      <Image
        src={require('@/components/common/logo-image/isae-logo.png')}
        alt="ISAE"
        width={24}
        height={24}
      />
    </Link>
  );
};

export const MinaFoundationIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://minafoundation.com/" rel="noopener noreferrer" target="_blank">
      <Image
        src={require('@/components/common/logo-image/mina-foundation-logo.png')}
        alt="Mina Foundation"
        width={24}
        height={24}
      />
    </Link>
  );
};

export const ProtocolLabsIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://protocol.ai/" rel="noopener noreferrer" target="_blank">
      <Image
        src={require('@/components/common/logo-image/protocol-labs-logo.png')}
        alt="Protocol Labs"
        width={24}
        height={24}
      />
    </Link>
  );
};

export const SuccinctIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://succinct.xyz/" rel="noopener noreferrer" target="_blank">
      <Image
        src={require('@/components/common/logo-image/succinct-logo.png')}
        alt="Succinct"
        width={24}
        height={24}
      />
    </Link>
  );
};

export const TermStructureIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://ts.finance" rel="noopener noreferrer" target="_blank">
      <Image
        src={require('@/components/common/logo-image/term-structure-logo.png')}
        alt="Term Structure"
        width={24}
        height={24}
      />
    </Link>
  );
};

export const UpmIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://www.upm.es/" rel="noopener noreferrer" target="_blank">
      <Image
        src={require('@/components/common/logo-image/upm-logo.png')}
        alt="UPM"
        width={24}
        height={24}
      />
    </Link>
  );
};
