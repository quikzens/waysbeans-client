const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const displayDate = (time) => {
  const day = days[time.getDay()]
  const date = time.getDate()
  const month = months[time.getMonth()]
  const year = time.getFullYear()

  return (
    <p>
      <strong>{day}</strong>, {date} {month} {year}
    </p>
  )
}

export default displayDate
