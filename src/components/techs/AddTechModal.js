import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import { addTech } from '../../actions/techActions'

const AddTechModal = ({ addTech }) => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

	const addNewTech = (e) => {
		if (firstName === '' || lastName === '') {
			M.toast({ html: 'Please enter First Name and Last Name' })
		} else {
			addTech({
				firstName: firstName,
				lastName: lastName,
			})
			M.toast({ html: 'New Technician Added' })
			setFirstName('')
			setLastName('')
		}
	}

	return (
		<div id='add-tech-modal' className='modal'>
			<div className='modal-content'>
				<h4>Add Technician</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstName'
							value={firstName}
							onChange={(e) => {
								setFirstName(e.target.value)
							}}
						/>
						<label htmlFor='firstName' className='active'>
							First Name
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastName'
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value)
							}}
						/>
						<label htmlFor='lastName' className='active'>
							Last Name
						</label>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='#!'
					className='modal-close waves-effect waves-light btn blue'
					onClick={addNewTech}
				>
					Enter
				</a>
			</div>
		</div>
	)
}

AddTechModal.propTypes = {
	addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal)
