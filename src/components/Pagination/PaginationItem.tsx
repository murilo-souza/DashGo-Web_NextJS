import {Button} from '@chakra-ui/react'

interface PaginationItemProps {
    isCurrent?:boolean;
    number: number;
    onPageChange: (page: number)=>void
}

export function PaginationItem({isCurrent=false, number, onPageChange}: PaginationItemProps){
    if (isCurrent){
        return(
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                border="none"
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        );

    }

    return (
        <Button
            color="white"
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            border="none"
            _hover={{
                bg: 'gray.500'
            }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    );
}