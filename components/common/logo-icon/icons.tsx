import Image from 'next/image';
import Link from 'next/link';

// Import images statically for better performance
import airbusLogo from '@/components/common/logo-image/airbus-logo.png';
import berkeleyLogo from '@/components/common/logo-image/berkeley-logo.png';
import ethereumFoundationLogo from '@/components/common/logo-image/ethereum-foundation-logo.png';
import ethglobalLogo from '@/components/common/logo-image/ethglobal-logo.png';
import ieeeLogo from '@/components/common/logo-image/ieee-logo.png';
import isaeLogo from '@/components/common/logo-image/isae-logo.png';
import matterLabsLogo from '@/components/common/logo-image/matter-labs-logo.png';
import minaFoundationLogo from '@/components/common/logo-image/mina-foundation-logo.png';
import protocolLabsLogo from '@/components/common/logo-image/protocol-labs-logo.png';
import succinctLogo from '@/components/common/logo-image/succinct-logo.png';
import termStructureLogo from '@/components/common/logo-image/term-structure-logo.png';
import upmLogo from '@/components/common/logo-image/upm-logo.png';

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
      <Image src={airbusLogo} alt="Airbus" width={24} height={24} priority={false} loading="lazy" />
    </Link>
  );
};

export const BerkeleyIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://rdi.berkeley.edu/course/zkp/s23" rel="noopener noreferrer" target="_blank">
      <Image
        src={berkeleyLogo}
        alt="Berkeley"
        width={24}
        height={24}
        priority={false}
        loading="lazy"
      />
    </Link>
  );
};

export const EthereumFoundationIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://ethereum.org/en/" rel="noopener noreferrer" target="_blank">
      <Image
        src={ethereumFoundationLogo}
        alt="Ethereum"
        width={24}
        height={24}
        priority={false}
        loading="lazy"
      />
    </Link>
  );
};

export const EthGlobalIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://ethglobal.com/" rel="noopener noreferrer" target="_blank">
      <Image
        src={ethglobalLogo}
        alt="EthGlobal"
        width={24}
        height={24}
        priority={false}
        loading="lazy"
      />
    </Link>
  );
};

export const IeeeIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://www.ieee.org/" rel="noopener noreferrer" target="_blank">
      <Image src={ieeeLogo} alt="IEEE" width={24} height={24} priority={false} loading="lazy" />
    </Link>
  );
};

export const IsaeIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://www.isae-supaero.fr/en/" rel="noopener noreferrer" target="_blank">
      <Image src={isaeLogo} alt="ISAE" width={24} height={24} priority={false} loading="lazy" />
    </Link>
  );
};

export const MatterLabsIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://www.matter-labs.io/" rel="noopener noreferrer" target="_blank">
      <Image
        src={matterLabsLogo}
        alt="Matter Labs"
        width={24}
        height={24}
        priority={false}
        loading="lazy"
      />
    </Link>
  );
};

export const MinaFoundationIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://minafoundation.com/" rel="noopener noreferrer" target="_blank">
      <Image
        src={minaFoundationLogo}
        alt="Mina Foundation"
        width={24}
        height={24}
        priority={false}
        loading="lazy"
      />
    </Link>
  );
};

export const ProtocolLabsIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://protocol.ai/" rel="noopener noreferrer" target="_blank">
      <Image
        src={protocolLabsLogo}
        alt="Protocol Labs"
        width={24}
        height={24}
        priority={false}
        loading="lazy"
      />
    </Link>
  );
};

export const SuccinctIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://succinct.xyz/" rel="noopener noreferrer" target="_blank">
      <Image
        src={succinctLogo}
        alt="Succinct"
        width={24}
        height={24}
        priority={false}
        loading="lazy"
      />
    </Link>
  );
};

export const TermStructureIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://ts.finance" rel="noopener noreferrer" target="_blank">
      <Image
        src={termStructureLogo}
        alt="Term Structure"
        width={24}
        height={24}
        priority={false}
        loading="lazy"
      />
    </Link>
  );
};

export const UpmIcon: React.FC<JSX.IntrinsicElements['svg']> = () => {
  return (
    <Link href="https://www.upm.es/" rel="noopener noreferrer" target="_blank">
      <Image src={upmLogo} alt="UPM" width={24} height={24} priority={false} loading="lazy" />
    </Link>
  );
};
