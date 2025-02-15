import { Course } from "../models/course.js"; // Assuming you have a Course model

// Fetch all courses
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server error!", error });
  }
};

// Fetch a specific course by ID
export const getModuleDetails = async (req, res) => {
  try {
    const { courseId, moduleId } = req.params;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found!" });

    const module = course.modules.id(moduleId);
    if (!module) return res.status(404).json({ message: "Module not found!" });

    res.status(200).json({
      moduleTitle: module.moduleTitle,
      lecture: module.lecture, // ✅ Includes video URL
      quiz: module.quiz // ✅ Includes associated quiz
    });

  } catch (error) {
    res.status(500).json({ message: "Failed to fetch module details", error });
  }
};
export const getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found!" });
    }

    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ message: "Failed to get course by ID", error: error.message });
  }
};

// Fetch module quiz
export const getModuleQuiz = async (req, res) => {
  const { courseId: _id } = req.params;

  try {
    const course = await Course.findById(_id);
    if (!course) return res.status(404).json({ message: "Course not found!" });

    res.status(200).json(course.moduleQuiz);
  } catch (error) {
    res.status(500).json({ message: "Server error!", error });
  }
};
