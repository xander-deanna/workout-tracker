const API = {
  // fetches and returns last workout 
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    return json[json.length - 1];
  },

  // allows user to add more exercises to preexisting workout
  async addExercise(data) {
    const id = location.search.split("=")[1];
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    return json;
  },

  // creates a new workout
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    const json = await res.json();
    return json;
  },

  // ???
  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
