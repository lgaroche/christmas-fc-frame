export default function Home() {
  let today = new Date()
  return (
    <div
      style={{
        fontSize: 128,
        background: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {
        today.getMonth() === 11 && today.getDate() === 25
          ? 'Yes!'
          : 'No'
      }
    </div>
  )
}
