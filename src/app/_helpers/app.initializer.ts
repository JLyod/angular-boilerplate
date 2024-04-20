import { AccountService } from '@app/_services';

export function appInitializer(accountService: AccountService ) {
    return () => new Promise(resolve => {
        accountService.refreshToken()
            .subcribe()
            .add(resolve);
    });
}