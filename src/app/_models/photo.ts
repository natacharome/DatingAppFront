import { Pagination } from './pagination';

export interface Photo {
    id: number;
    url: string;
    description: string;
    dateAdded: Date;
    isMain: boolean;
}

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}