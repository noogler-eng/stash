import mutations from "./mutation";
import query from "./query";
import types from "./type";
import resolvers from "./resolver";

const simple_query = query.queries;
const muta = query.muta;

export default {mutations, simple_query, muta, types, resolvers};