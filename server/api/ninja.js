export default defineEventHandler(async (event) => {


  // const {name1 } = getQuery(event)

  // const {age, name} = await readBody(event);

  // const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_O2q3LbDlfiytCZqFnWPitHz5JXWx9TkFSkpueRzp')
  const {data} = await $fetch(
    'https://api.currencyapi.com/v3/latest?apikey=cur_live_O2q3LbDlfiytCZqFnWPitHz5JXWx9TkFSkpueRzp'
  )


  return data;
})