import React, { useMemo } from 'react'
import Button from 'components/button'
import { ReactComponent as PaginationDoubleLeftIcon } from 'assets/svg/pagination_double_left.svg'
import { ReactComponent as PaginationLeftIcon } from 'assets/svg/pagination_left.svg'
import { ReactComponent as PaginationDoubleRightIcon } from 'assets/svg/pagination_double_right.svg'
import { ReactComponent as PaginationRightIcon } from 'assets/svg/pagination_right.svg'
import { IPaginationProps } from 'components/pagination/types'

const Pagination: React.FC<IPaginationProps> = ({
	pages,
	currentPage,
	onPageClick,
	disabled,
}) => {
	const shownPages = useMemo(() => {
		const arr = new Array(3).fill('')

		if (currentPage === 1) {
			return arr.map((_, i) => i + 1)
		}

		if (currentPage === pages) {
			return arr.map((_, i) => currentPage - 2 + i)
		}

		return arr.map((_, i) => currentPage - 1 + i)
	}, [currentPage, pages])

	const onPageClickHadler = (page: number) => {
		if (onPageClick) {
			onPageClick(page)
		}
	}

	const onBackClickHandler = () => {
		if (onPageClick) {
			onPageClick(currentPage - 1)
		}
	}

	const onDoubleBackClickHandler = () => {
		if (onPageClick) {
			onPageClick(1)
		}
	}

	const onNextClickHandler = () => {
		if (onPageClick) {
			onPageClick(currentPage + 1)
		}
	}

	const onDoubleNextClickHandler = () => {
		if (onPageClick) {
			onPageClick(pages)
		}
	}

	return (
		<div className="pagination">
			<Button
				variant="pagination"
				additionalVariant="pagination-left"
				onClick={onDoubleBackClickHandler}
				disabled={disabled || currentPage <= 1}
			>
				<PaginationDoubleLeftIcon />
			</Button>
			<Button
				variant="pagination"
				onClick={onBackClickHandler}
				disabled={disabled || currentPage <= 1}
			>
				<PaginationLeftIcon />
			</Button>
			{shownPages.map((page, i) => {
				return (
					<Button
						key={'pagination-' + page}
						onClick={() => onPageClickHadler(page)}
						variant="pagination"
						additionalVariant={
							currentPage === page
								? 'pagination-current'
								: undefined
						}
						disabled={disabled}
					>
						{page}
					</Button>
				)
			})}
			<Button
				variant="pagination"
				onClick={onNextClickHandler}
				disabled={disabled || currentPage >= pages}
			>
				<PaginationRightIcon />
			</Button>
			<Button
				variant="pagination"
				additionalVariant="pagination-right"
				onClick={onDoubleNextClickHandler}
				disabled={disabled || currentPage >= pages}
			>
				<PaginationDoubleRightIcon />
			</Button>
		</div>
	)
}

export default Pagination
