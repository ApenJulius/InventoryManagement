export enum UserRole {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    USER = 'USER'
}

export enum ProductStatus{
    AVAILABLE = 'AVAILABLE',
    BORROWED = 'BORROWED',
    BROKEN = 'BROKEN',
    LOST = 'LOST'
}

export interface IProduct {
    id?: number;
    name?: string;
    borrower?: string;
    lendingDate?: string;
    status?: string;
    lendingExpiration?: string;
    onOutsideClick?: () => void;
    // Add any other properties here
}

export interface IVeil {
    onOutsideClick?: () => void;
    children: React.ReactNode;
}
