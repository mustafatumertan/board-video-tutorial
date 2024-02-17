"use client";

import { EmptyState } from "./empty-state";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    }
}

export const BoardList = ({
    orgId,
    query
}: BoardListProps) => {

    const data = []; // TODO: Change to API Call

    if (!data?.length && query.search) {
        return (
            <EmptyState
                type="search"
                message={{primary: "No results found!", secondary: "Try searching something else"}}
                imageSize={{width: 140, height: 140}}
                button={{display: false}}
            />
        );
    }

    if (!data?.length && query.favorites) {
        return (
                <EmptyState
                    type="favorites"
                    message={{primary: "No favorite boards!", secondary: "Create a favoriting a board first"}}
                    imageSize={{width: 140, height: 140}}
                    button={{display: false}}
                />
        );
    }

    if (!data?.length) {
        return (
            <EmptyState
                type="boards"
                message={{primary: "Create your first board!", secondary: "Start by creating a board for your organization"}}
                imageSize={{width: 110, height: 110}}
                button={{display: true, text: "Create board"}}
            />
        );
    }

    return (
        <div>
            {JSON.stringify(query)}
        </div>
    );
};