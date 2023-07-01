import httpCommon from "../Helpers/http-common";

class ExpenseDataService{

    getAll() {
        return httpCommon.get("/expenses");
      }
    
      get(id) {
        return httpCommon.get(`/expenses/${id}`);
      }
    
      create(data) {
        return httpCommon.post("/expenses", data);
      }
    
      update(id, data) {
        return httpCommon.put(`/expenses/${id}`, data);
      }
    
      delete(id) {
        return httpCommon.delete(`/expenses/${id}`);
      }
    
      deleteAll() {
        return httpCommon.delete(`/expenses`);
      }
    
      findByTitle(title) {
        return httpCommon.get(`/expenses?title=${title}`);
      }
}
export default new ExpenseDataService();