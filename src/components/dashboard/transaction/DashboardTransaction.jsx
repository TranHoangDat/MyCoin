import { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import DashboardContent from "../DashboardContent";
import TransactionList from "./TransactionList";
import TransactionListItem from "./TransactionListItem";

export default function DashboardTransaction() {
  const { blockchainService } = useContext(MainContext);
  const blocks = blockchainService.getBlocks();

  return (
    <DashboardContent>
      <TransactionList>
        {blocks.map(block =>
          block.transactions.map(tx => (
            <TransactionListItem
              key={tx.hash}
              txHash={tx.hash}
              fromAddress={tx.fromAddress}
              toAddress={tx.toAddress}
              amount={tx.amount}
            />
          )),
        )}
      </TransactionList>
    </DashboardContent>
  );
}
