import { TransferForm } from '@/components/transfer-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TransferPage() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
        <div className="text-center">
            <h1 className="text-3xl font-bold font-headline">Send Money</h1>
            <p className="text-muted-foreground">
                Quickly and securely transfer funds to another user.
            </p>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>New Transfer</CardTitle>
                <CardDescription>Search for a user and enter the amount to send.</CardDescription>
            </CardHeader>
            <CardContent>
                <TransferForm />
            </CardContent>
        </Card>
    </div>
  );
}
