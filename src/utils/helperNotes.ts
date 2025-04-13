// =====================================================>
// search filter without extra states
// Pass the filter data directly to the list
// const {data, loading} = useQuery(GET_NOTES_QUERY);
// const notesData = useMemo(() => data?.getNote?.data || [], [data]);
// const [searchTxt, setSearchTxt] = useState('');

//  const filteredData = useMemo(() => {
//   return notesData.filter((item: MiniRecordItem) =>
//     item?.template?.name?.toLowerCase().includes(searchTxt.toLowerCase()),
//   );
// }, [searchTxt, notesData]);
// search filter without extra states
// Pass the filter data directly to the list
// =====================================================>
// How to pass routes with props
// export interface ParamsProps extends ParamListBase {
//   SelectTemplate: {noteID: string};
// }
// const route = useRoute<RouteProp<ParamsProps, 'SelectTemplate'>>();
// How to pass routes with props
// =====================================================>
