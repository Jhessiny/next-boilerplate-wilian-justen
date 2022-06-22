import { render, screen } from '@testing-library/react'

import Main from './'

describe('', () => {
	it('', () => {
		const { container } = render(<Main />)
		expect(
			screen.getByRole('heading', { name: /react avancado/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
