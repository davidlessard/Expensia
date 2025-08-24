import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const PlaidLink = ({ user }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };
    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });
      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = { token, onSuccess };
  const { open, ready } = usePlaidLink(config);

  // 🔥 version alignée avec sidebar-link
  return (
    <button
      onClick={() => open()}
      disabled={!ready}
      className={cn("sidebar-link cursor-pointer")}
    >
      <div className="relative size-6">
        <Image
          src="/icons/connect-bank.svg"
          alt="Ajouter un compte bancaire"
          fill
        />
      </div>
      <p className="sidebar-label">Ajouter un Compte</p>
    </button>
  );
};

export default PlaidLink;

// ------------------------------------------------
// ANCIEN CODE PARCE QUE JE VOULAIS QUE LA MISE EN PAGE SOIT LA MÊME POUR TOUS LES ÉLÉMENTS DU SIDEBAR

// const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
//     const router = useRouter();

//     const [token, setToken] = useState("");

//     useEffect(() => {
//         const getLinkToken = async () => {
//             const data = await createLinkToken(user);
            
//             setToken(data?.linkToken);
//         }
//         getLinkToken();
//     }, [user]);
    
//     const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token:string) => {
//         await exchangePublicToken({
//             publicToken: public_token,
//             user, 
//         });

//         router.push("/");
//     }, [user])
    
//     const config: PlaidLinkOptions = {
//         token,
//         onSuccess
//     }

//     const {open, ready } = usePlaidLink(config);

//   return (
//     <>
//         {variant === "primary" ? (
//             <Button 
//                 onClick={() => open()}
//                 disabled={!ready}
//                 className="plaidlink-primary"
//             >
//                 Connect bank
//             </Button>
//         ): variant === "ghost" ? (
//             <Button onClick={() => open()} variant="ghost" className="plaidlink-ghost">
//                 <Image 
//                     src="/icons/connect-bank.svg"
//                     alt="connect bank"
//                     width={24}
//                     height={24}
//                 />
//                 <p className="text-[16px] font-semibold text-[#1f2937] sm:hidden md:block">Connect bank</p>
//             </Button>
//         ): (
//             <Button onClick={() => open()} className="plaidlink-default">
//                 <Image 
//                     src="/icons/connect-bank.svg"
//                     alt="connect bank"
//                     width={24}
//                     height={24}
//                 />
//                 <p className="text-[16px] font-semibold text-[#1f2937]">Ajouter un compte bancaire</p>
//             </Button>
//         )}
//     </>
//   )
// }

// export default PlaidLink