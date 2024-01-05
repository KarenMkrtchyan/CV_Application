import { useState } from 'react'
import './App.css'

function GeneralInfo({ generalInfo, updateGeneral }) {
	const [name, updateName] = useState('')
	const [email, updateEmail] = useState('')
	const [number, updatenumber] = useState(0)

	function onSubmit(event) {
		event.preventDefault()
		const updatedInfo = { name, number, email }
		console.log('Submitting General Information', generalInfo)
		updateGeneral(updatedInfo)
	}

	return (
		<>
			<h2>General Informaion</h2>
			<form id="generalInfo">
				<div>
					<label htmlFor="name">Full Name</label>
					<input
						value={name}
						onChange={e => updateName(e.target.value)}
						name="name"
						type="text"
					></input>
				</div>

				<div>
					<label htmlFor="email">Email</label>
					<input
						value={email}
						onChange={e => updateEmail(e.target.value)}
						name="email"
						type="email"
					></input>
				</div>

				<div>
					<label htmlFor="phoneNumber">Phone Number</label>
					<input
						value={number}
						onChange={e => updatenumber(e.target.value)}
						name="phoneNumber"
						type="tel"
					></input>
				</div>

				<div className="subEditButton">
					<button type="submit" onClick={event => onSubmit(event)}>
						Submit
					</button>
					<button>Edit</button>
				</div>
			</form>
		</>
	)
}
function EducationalExperience({ eduList, updateEduList }) {
	const [name, updateName] = useState('')
	const [degree, updateDegree] = useState('')
	const [title, updateTitle] = useState('')
	const [date, updateDate] = useState('')

	function onSubmit(event) {
		event.preventDefault()
		const newUni = { name, degree, title, date }
		const newList = eduList
		newList.push(newUni)
		updateEduList(newUni)
		console.log('Submitting Educational Experience', newList)
	}

	return (
		<>
			<h2>Educational Background</h2>
			<form id="educationForm">
				<div>
					<label htmlFor="name">Name of Instituion</label>
					<input
						value={name}
						onChange={e => updateName(e.target.value)}
						name="name"
						type="text"
					></input>
				</div>

				<div>
					<label htmlFor="name">Field of Study</label>
					<input
						value={degree}
						onChange={e => updateDegree(e.target.value)}
						name="name"
						type="text"
					></input>
				</div>

				<div>
					<label htmlFor="name">Title of Degree</label>
					<input
						value={title}
						onChange={e => updateTitle(e.target.value)}
						name="name"
						type="text"
					></input>
				</div>

				<div>
					<label htmlFor="name">Date of Graduation</label>
					<input
						value={date}
						onChange={e => updateDate(e.target.value)}
						name="name"
						type="text"
					></input>
				</div>

				<div className="subEditButton">
					<button type="submit" onClick={event => onSubmit(event)}>
						Submit
					</button>
					<button>Edit</button>
				</div>
			</form>
		</>
	)
}
function PracticalExperience({ expList, updateExpList }) {
	const [name, updateName] = useState('')
	const [description, updateDescription] = useState('')
	const [title, updateTitle] = useState('')
	const [date, updateDate] = useState('')

	function onSubmit(event) {
		event.preventDefault()
		const newExp = { name, description, title, date }
		let newList = expList
		newList.push(newExp)
		updateExpList(newList)
		console.log('Submitting Educational Experience', newList)
	}

	return (
		<>
			<h2>Work Experiences</h2>
			<form id="educationForm">
				<div>
					<label htmlFor="name">Name of Company</label>
					<input
						value={name}
						onChange={e => updateName(e.target.value)}
						name="name"
						type="text"
					></input>
				</div>

				<div>
					<label htmlFor="name">Role Description</label>
					<input
						value={description}
						onChange={e => updateDescription(e.target.value)}
						name="name"
						type="text"
					></input>
				</div>

				<div>
					<label htmlFor="name">Job Title</label>
					<input
						value={title}
						onChange={e => updateTitle(e.target.value)}
						name="name"
						type="text"
					></input>
				</div>

				<div>
					<label htmlFor="name">Dates of Emplyement</label>
					<input
						value={date}
						onChange={e => updateDate(e.target.value)}
						name="name"
						type="text"
					></input>
				</div>

				<div className="subEditButton">
					<button type="submit" onClick={event => onSubmit(event)}>
						Submit
					</button>
					<button>Edit</button>
				</div>
			</form>
		</>
	)
}

function CV({ generalInfo, eduList, expList }) {
	return (
		<>
			<div>
				<h1>{generalInfo.name}</h1>
				<p>
					Email: {generalInfo.email} <br /> Phone Number: {generalInfo.number}
				</p>
			</div>
			<div></div>
		</>
	)
}

function App() {
	const [generalInfo, updateGeneral] = useState({
		name: '',
		email: '',
		number: '',
	})
	const [eduList, updateEduList] = useState([])
	const [expList, updateExpList] = useState([])

	return (
		<>
			<GeneralInfo generalInfo={generalInfo} updateGeneral={updateGeneral} />
			<EducationalExperience eduList={eduList} updateEduList={updateEduList} />
			<PracticalExperience expList={expList} updateExpList={updateExpList} />
			<CV generalInfo={generalInfo} eduList={eduList} expList={expList} />
		</>
	)
}

export default App
