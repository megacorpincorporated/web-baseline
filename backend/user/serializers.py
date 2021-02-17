from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    # pylint: disable=missing-class-docstring,too-few-public-methods

    class Meta:
        model = User
        fields = ('email', 'password', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        """Override standard create to activate custom user creation."""
        password = validated_data.pop("password")
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
