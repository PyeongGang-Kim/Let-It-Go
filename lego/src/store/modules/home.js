import api from "../../api";
// import router from "../../router";

const state = {
  homeCate: 1,
  model: {
    id: 0,
    images: "",
    name: "",
    num_part: 0,
    description: "",
    tags: "",
    references: "",
    theme_id: 0,
    user_id: 0,
    created_at: "",
    updated_at: ""
  },
  modelList: [],
  modelPage: "1"
};

const actions = {
  async getModels({ commit }, params) {
    const append = params.append;
    const resp = await api.getModels(params).then(res => res.data);

    const models = resp.results.map(e => e);

    if (append) {
      commit("addModelList", models);
    } else {
      commit("setModels", models);
    }
    // console.log(resp.next);
    commit("setModelPage", resp.next);
  }
};

const mutations = {
  setHomeCate(state, value) {
    state.homeCate = value;
  },
  setModels(state, model) {
    state.modelList = model.map(e => e);
  },
  addModelList(state, model) {
    state.modelList = state.modelList.concat(model);
  },
  setModelPage(state, url) {
    state.modelPage = new URL(url).searchParams.get("page");
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
