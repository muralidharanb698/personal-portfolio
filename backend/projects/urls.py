from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, SkillViewSet

router = DefaultRouter()
router.register('projects', ProjectViewSet)
router.register('skills', SkillViewSet)

urlpatterns = router.urls