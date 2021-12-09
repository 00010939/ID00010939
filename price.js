
	const tranings = [
		{
			name: "One day",
			price: "5.00",
			range: "day",
			oneTime: true,
			group: true,
			cardio: true,
			fitness: true	
		},
		{
			name: "Monthly",
			price: "5.00",
			range: "month",
			oneTime: false,
			group: true,
			cardio: true,
			fitness: true	
		},
		{
			name: "For three Month",
			price: "5.00",
			range: "month",
			limit: 3,
			oneTime: false,
			group: true,
			cardio: true,
			fitness: true	
		},
		{
			name: "Half year",
			price: "5.00",
			range: "month",
			limit: 6,
			oneTime: false,
			group: true,
			cardio: true,
			fitness: true	
		},
		{
			name: "Yearly",
			price: "5.00",
			range: "year",
			oneTime: false,
			group: true,
			cardio: true,
			fitness: true	
		},
		
	]
	tranings.forEach((traning, index) => {
		document.getElementById('tranings').innerHTML += `<tr>
			<td>${traning.name}</td>
			<td>${traning.price} per ${traning?.limit || ''} ${traning.range} </td>
			<td>${traning.oneTime ? 'Yes': 'No'}</td>
			<td>${traning.group ? 'Yes': 'No'}</td>
			<td>${traning.cardio ? 'Yes': 'No'}</td>
			<td>${traning.fitness ? 'Yes': 'No'}</td>
			</tr>`
	})
