import HeaderBox from '@/components/HeaderBox'
import { Pagination } from '@/components/Pagination';
import TransactionsTable from '@/components/TransactionsTable';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { formatAmount } from '@/lib/utils';
import React from 'react'

const TransactionHistory = async ({ searchParams }: { searchParams: { id?: string, page?: string } })  => {
    // I had to change this to await searchParams because the error was saying that searchParams.id was not available and that I should await searchParams.
    const awaitedSearchParams = await searchParams;
    const id = awaitedSearchParams.id;
    const page = awaitedSearchParams.page;
  
    const currentPage = Number(page as string ) || 1; // Default to page 1 if not provided
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({ userId: loggedIn.$id }); 
    
    if (!accounts) return; // or redirect, or render "no accounts" UI
  
    const accountsData = accounts?.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
   
    const account = await getAccount({ appwriteItemId });
    const rowsPerPage = 10;
    const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);

    const indexOfLastTransaction = currentPage * rowsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

    const currentTransactions = account?.transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
        title="Transaction History"
        subtext="See your bank details and transactions."/>
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">
              {account?.data.name}
            </h2>
            <p className="text-14 text-blue-50">
              {account?.data.officialName}
            </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● {account?.data.mask}
            </p>
          </div>
          <div className="transactions-account-balance">
            <p className="text-14">Curent balance</p>
            <p className="text-24 text-center text-semi-bold">
              {formatAmount(account?.data.currentBalance)}
            </p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          Transactions Table {/* TO REMOVE (NOT IN SANDBOX)*/} 
          {/* <TransactionsTable
              transactions={currentTransactions} 
              /> // TO ADD WHEN TRANSACTIONS ARE FUNCTIONAL (NOT IN SANDBOX)*/} 

          {totalPages > 1 && (
              <div className="my-4 w-full">
                  <Pagination 
                      totalPages={totalPages} 
                      page={currentPage}
                  />
              </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory

